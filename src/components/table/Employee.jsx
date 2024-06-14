import React from 'react'

function Employee() {
  return (
    <div class="relative overflow-x-auto shadow-md  sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right  text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-indigo-400 dark:bg-gray-800">
                    Name
                </th>
                <th scope="col" class="px-6 py-3 bg-indigo-300">
                    Role
                </th>
                <th scope="col" class="px-6 py-3 bg-indigo-400 dark:bg-gray-800">
                    Department
                </th>
                <th scope="col" class="px-6 py-3 bg-indigo-300">
                    Experience (Years)
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                DORA GIA
                </th>
                <td class="px-6 py-4">
                    CEO
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Marketing
                </td>
                <td class="px-6 py-4">
                    8
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                LILIANA EDDA
                </th>
                <td class="px-6 py-4">
                Relationship Manager
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Marketing
                </td>
                <td class="px-6 py-4">
                    5
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                GIORGIO EFISIO
                </th>
                <td class="px-6 py-4">
                 Manager
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Marketing
                </td>
                <td class="px-6 py-4">
                    4
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                REMIGIO ULISSE
                </th>
                <td class="px-6 py-4">
                Senior Designer
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Developer
                </td>
                <td class="px-6 py-4">
                    3
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                CONSOLATA NELLA
                </th>
                <td class="px-6 py-4">
                    Marketing
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                   Developer
                </td>
                <td class="px-6 py-4">
                    6
                </td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default Employee