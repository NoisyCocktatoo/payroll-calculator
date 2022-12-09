import React, { useState } from "react";
import toast from "react-hot-toast";

const Main = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [hoursWorked, setHoursWorked] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [deductions, setDeductions] = useState(0);
  const [payrollData, setPayrollData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (hoursWorked === 0) {
      toast.error("Please specify input all necessary details.");
      return;
    }

    // Calculate payroll
    const grossPay = hoursWorked * hourlyRate;
    const netPay = grossPay - taxes - deductions;

    // Save payroll data in state
    setPayrollData((data) => [...data, { grossPay, netPay }]);

    // Clear form fields
    setHoursWorked(0);
    setHourlyRate(0);
    setTaxes(0);
    setDeductions(0);
  };

  return (
    <div className="bg-white w-[600px] h-[800px] flex flex-col justify-center p-10 mt-10 rounded-2xl shadow-lg shadow-slate-900">
      <div>
        <h1 className="text-3xl py-2">Payroll Calculator</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col h-full mt-3"
      >
        <label className="text-xl">Name:</label>
        <input
          className="rounded-2xl bg-gray-200 p-3 mb-3"
          type="string"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label className="text-xl">Position:</label>
        <input
          className="rounded-2xl bg-gray-200 p-3 mb-3"
          type="string"
          name="position"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
        />
        <label className="text-xl">Hours Worked (₱):</label>
        <input
          className="rounded-2xl bg-gray-200 p-3 mb-3"
          type="number"
          name="hoursWorked"
          value={hoursWorked}
          onChange={(event) => setHoursWorked(event.target.value)}
        />
        <label className="text-xl">Hourly Rate (₱):</label>
        <input
          className="rounded-2xl bg-gray-200 p-3 mb-3"
          type="number"
          name="hourlyRate"
          value={hourlyRate}
          onChange={(event) => setHourlyRate(event.target.value)}
        />
        <label className="text-xl">Taxes (₱):</label>
        <input
          className="rounded-2xl bg-gray-200 p-3 mb-3"
          type="number"
          name="taxes"
          value={taxes}
          onChange={(event) => setTaxes(event.target.value)}
        />
        <label className="text-xl">Deductions (₱):</label>
        <input
          className="rounded-2xl bg-gray-200 p-3 mb-3"
          type="number"
          name="deductions"
          value={deductions}
          onChange={(event) => setDeductions(event.target.value)}
        />
        <button
          type="submit"
          className="p-3 bg-purple-600 text-white rounded-2xl text-xl"
        >
          Calculate Payroll
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Gross Pay</th>
            <th>Net Pay</th>
          </tr>
        </thead>
        <tbody>
          {payrollData.map((data) => (
            <tr>
              <td>₱{data.grossPay}</td>
              <td>₱{data.netPay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
