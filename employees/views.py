from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Employee
from .serializers import EmployeeSerializer


class EmployeeView(APIView):

    # GET ALL EMPLOYEES OR SINGLE EMPLOYEE
    def get(self, request, id=None):
        if id is not None:
            try:
                employee = Employee.objects.get(id=id)
                serializer = EmployeeSerializer(employee)
                return Response(serializer.data)
            except Employee.DoesNotExist:
                return JsonResponse("Employee Not Found", safe=False, status=404)

        employees = Employee.objects.all()
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data)

    # ADD EMPLOYEE
    def post(self, request, id=None):
        serializer = EmployeeSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Employee Added Successfully", safe=False)

        return JsonResponse(serializer.errors, safe=False)

    # UPDATE EMPLOYEE
    def put(self, request, id=None):
        try:
            employee_to_update = Employee.objects.get(id=id)
        except Employee.DoesNotExist:
            return JsonResponse("Employee Not Found", safe=False, status=404)

        serializer = EmployeeSerializer(
            employee_to_update,
            data=request.data,
            partial=True
        )

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Employee Updated Successfully", safe=False)

        return JsonResponse(serializer.errors, safe=False)

    # DELETE EMPLOYEE
    def delete(self, request, id=None):
        try:
            employee_to_delete = Employee.objects.get(id=id)
            employee_to_delete.delete()
            return JsonResponse("Employee Deleted Successfully", safe=False)
        except Employee.DoesNotExist:
            return JsonResponse("Employee Not Found", safe=False, status=404)