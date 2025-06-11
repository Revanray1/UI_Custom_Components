import React from "react";

const sampleData = [
{
    srNo: 1,
    investment: "Investment A",
    investmentDate: "2024-01-15",
    relationshipManagedBy: "Alice",
    committed: [100, 200], 
    invested: [50, 150, 250, 350, 450],
    pendingDrawdown: 100,
    netInvestedAmount: 900,
    grossIRR: "12%",
    comments: "Good performance",
  },
  {
    srNo: 1,
    investment: "Investment A",
    investmentDate: "2024-01-15",
    relationshipManagedBy: "Alice",
    committed: [100, 200], 
    invested: [50, 150, 250, 350, 450],
    pendingDrawdown: 100,
    netInvestedAmount: 900,
    grossIRR: "12%",
    comments: "Good performance",
  },
  {
    srNo: 1,
    investment: "Investment A",
    investmentDate: "2024-01-15",
    relationshipManagedBy: "Alice",
    committed: [100, 200], 
    invested: [50, 150, 250, 350, 450],
    pendingDrawdown: 100,
    netInvestedAmount: 900,
    grossIRR: "12%",
    comments: "Good performance",
  },
  {
    srNo: 1,
    investment: "Investment A",
    investmentDate: "2024-01-15",
    relationshipManagedBy: "Alice",
    committed: [100, 200], 
    invested: [50, 150, 250, 350, 450],
    pendingDrawdown: 100,
    netInvestedAmount: 900,
    grossIRR: "12%",
    comments: "Good performance",
  },
  {
    srNo: 2,
    investment: "Investment B",
    investmentDate: "2023-12-10",
    relationshipManagedBy: "Bob",
    committed: [80, 160],
    invested: [40, 120, 180],
    pendingDrawdown: 60,
    netInvestedAmount: 540,
    grossIRR: "10%",
    comments: "Stable",
  },
];

const DynamicTable = ({
  committedCount = 3,
  investedCount = 3,
  data = [],
}) => {
  // Helper to create sub-header cells dynamically
  const renderSubHeaders = (count, baseLabel) => {
    return Array.from({ length: count }, (_, i) => (
      <th  style={{border:"1px solid red"}} key={`${baseLabel}-${i + 1}`}>{`${baseLabel} ${i + 1}`}</th>
    ));
  };

  // Render data rows with dynamic columns for committed and invested
  const renderRows = () => {
    return data.map((row, idx) => (
      <tr key={idx}>
        <td style={{border:"1px solid grey"}}>{row.srNo}</td>
        <td  style={{border:"1px solid grey"}}>{row.investment}</td>
        <td  style={{border:"1px solid grey"}}>{row.investmentDate}</td>
        <td  style={{border:"1px solid grey"}}>{row.relationshipManagedBy}</td>

        {/* Committed dynamic columns changing here */}
        {Array.from({ length: committedCount }, (_, i) => (
          <td  style={{border:"1px solid grey"}} key={`committed-${i}`}>{row.committed[i] ?? "-"}</td>
        ))}

        {/* Invested dynamic columns changing here */}
        {Array.from({ length: investedCount }, (_, i) => (
          <td  style={{border:"1px solid grey"}} key={`invested-${i}`}>{row.invested[i] ?? "-"}</td>
        ))}

        <td  style={{border:"1px solid grey"}}>{row.pendingDrawdown}</td>
        <td  style={{border:"1px solid grey"}}>{row.netInvestedAmount}</td>
        <td  style={{border:"1px solid grey"}}>{row.grossIRR}</td>
        <td  style={{border:"1px solid grey"}}>{row.comments}</td>
      </tr>
    ));
  };

  return (
    <table border="1" cellPadding="6" style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th rowSpan="2" style={{border:"1px solid grey"}}>Sr. No.</th>
          <th rowSpan="2" style={{border:"1px solid grey"}}>Investments</th>
          <th rowSpan="2" style={{border:"1px solid grey"}}>Investment Date</th>
          <th rowSpan="2" style={{border:"1px solid grey"}}>Relationship managed by</th>
          <th {...(committedCount > 0 ? { colSpan: committedCount } : { rowSpan: 2 })} style={{border:"1px solid grey"}}>Committed</th>
          <th {...(investedCount > 0 ? { colSpan: investedCount } : { rowSpan: 2 })} style={{border:"1px solid grey"}}>Invested</th>
          <th rowSpan="2" style={{border:"1px solid grey"}}>Pending Drawdown</th>
          <th rowSpan="2" style={{border:"1px solid grey"}}>Net Invested Amount</th>
          <th rowSpan="2" style={{border:"1px solid grey"}}>Gross IRR</th>
          <th rowSpan="2" style={{border:"1px solid grey"}}>Comments</th>
        </tr>
        <tr>
          {renderSubHeaders(committedCount, "Committed")}
          {renderSubHeaders(investedCount, "Invested")}
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};




export default function Multitable() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Dynamic Investment Table</h2>
      <DynamicTable committedCount={4} investedCount={5} data={sampleData} />
    </div>
  );
}

























