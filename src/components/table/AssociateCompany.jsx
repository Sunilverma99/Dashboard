import React from 'react'

function AssociateCompany() {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
    <table class="w-full text-sm text-left rtl:text-right  text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-100 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-pink-500 dark:bg-gray-800">
                    Company Name
                </th>
                <th scope="col" class="px-6 py-3 bg-pink-400">
                    Industry
                </th>
                <th scope="col" class="px-6 py-3 bg-pink-500 dark:bg-gray-800">
                    Service Used
                </th>
                <th scope="col" class="px-6 py-3 bg-pink-400">
                    Duration (Years)
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    TechCorp
                </th>
                <td class="px-6 py-4">
                    Technology
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Cloud Services
                </td>
                <td class="px-6 py-4">
                    3
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    HealthPlus
                </th>
                <td class="px-6 py-4">
                    Healthcare
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Data Analytics
                </td>
                <td class="px-6 py-4">
                    2
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    EduWorld
                </th>
                <td class="px-6 py-4">
                    Education
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    E-learning Platform
                </td>
                <td class="px-6 py-4">
                    4
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    RetailHub
                </th>
                <td class="px-6 py-4">
                    Retail
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    E-commerce Solutions
                </td>
                <td class="px-6 py-4">
                    5
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    FinServe
                </th>
                <td class="px-6 py-4">
                    Finance
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Financial Software
                </td>
                <td class="px-6 py-4">
                    1
                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default AssociateCompany