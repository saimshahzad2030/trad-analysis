"use client";
import React from "react";
import {
  appleData1d,
  financialStatement,
  valuationMeasures,
} from "@/global/constants";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FinancialStatement,
  IncomeStatement,
  BalanceSheet,
  CashFlowStatement,
} from "@/types/types";
import { Button } from "../ui/button";
import Link from "next/link";
import CompanyDetails from "../Chart/CompanyDetailsSection";
const FinancialsSection = () => {
  const [activeRange, setActiveRange] = React.useState("incomeStatement");
  const ranges = ["incomeStatement", "balanceSheet", "cashFlowStatement"];
  const [timeRange, setTimeRange] = React.useState("annual");
  const timeRanges = ["annual", "quarterly"];
  const [incomeStatements, setIncomeStatements] = React.useState<
    IncomeStatement[] | BalanceSheet[] | CashFlowStatement[]
  >(financialStatement.incomeStatement);

  const getFieldValues = (
    fieldPath: (s: IncomeStatement) => string
  ): string[] => {
    return incomeStatements.map(fieldPath);
  };

  // Helper to create rows
  const renderRow = (
    label: string,
    fieldPath: (s: IncomeStatement) => string
  ) => (
    <TableRow key={label} className=" bg-[#13131f]">
      <TableCell className="font-medium">{label}</TableCell>
      {getFieldValues(fieldPath).map((value, index) => (
        <TableCell key={index} className="text-center">
          {value}
        </TableCell>
      ))}
    </TableRow>
  );
  const formatKey = (key: string): string =>
    key
      .replace(/([a-z\d])([A-Z])/g, "$1 $2") // Space before caps that follow lowercase/digits
      .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2") // Fix acronyms followed by capitalized words
      .replace(/^./, (char) => char.toUpperCase());
  return (
    <div className="w-full flex flex-row items-start justify-between  px-8">
      <div className="w-9/12 flex flex-col items-center justify-start">
        <div className="w-full flex-col items-start text-white">
          <CompanyDetails />
          <div className="w-full flex flex-row items-center justify-between mt-4">
            <div className="flex flex-row w-10/12">
              {Object.keys(financialStatement).map((range) => (
                <Button
                  key={range}
                  variant="graphTab2"
                  onClick={() => {
                    setActiveRange(range);
                    setIncomeStatements(financialStatement[range]);
                  }}
                  className={`mr-1  text-[var(--variant-4)] border hover:border-[var(--variant-3)] ${
                    activeRange === range
                      ? "  bg-[var(--variant-2)]/50   border-[var(--variant-3)]    "
                      : "text-[var(--variant-4)] border-l-transparent border-b-transparent border-r-transparent border-t-transparent hover:border-[var(--variant-3)] "
                  }  `}
                >
                  {formatKey(range)}
                </Button>
              ))}
            </div>
            <p className="text-sm">Currency in USD</p>
          </div>
          <div className="w-full flex flex-row items-center justify-between my-4">
            <p className="text-sm w-2/12">All in Thousand</p>

            <div className="flex flex-row justify-end w-10/12">
              {timeRanges.map((range) => (
                <Button
                  key={range}
                  variant="graphTab2"
                  onClick={() => setTimeRange(range)}
                  className={`mr-1  text-[var(--variant-4)] border hover:border-[var(--variant-3)] ${
                    timeRange === range
                      ? "  bg-[var(--variant-2)]/50   border-[var(--variant-3)]    "
                      : "text-[var(--variant-4)] border-l-transparent border-b-transparent border-r-transparent border-t-transparent hover:border-[var(--variant-3)] "
                  }  `}
                >
                  {formatKey(range)}
                </Button>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col items-center mt-2 mb-10">
            <Table>
              <TableHeader>
                {activeRange === "incomeStatement" && (
                  <TableRow>
                    <TableHead className="w-[200px]">Name</TableHead>
                    {financialStatement.incomeStatement.map((s, i) => {
                      const date = new Date(s.date);
                      const formattedDate = `${date.getDate()}-${
                        date.getMonth() + 1
                      }-${date.getFullYear().toString()}`;

                      return (
                        <TableHead key={i} className="text-center">
                          {formattedDate}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                )}
                {activeRange === "balanceSheet" && (
                  <TableRow>
                    <TableHead className="w-[200px]">Name</TableHead>
                    {financialStatement.incomeStatement.map((s, i) => {
                      const date = new Date(s.date);
                      const formattedDate = `${date.getDate()}-${
                        date.getMonth() + 1
                      }-${date.getFullYear().toString()}`;

                      return (
                        <TableHead key={i} className="text-center">
                          {formattedDate}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                )}
                {activeRange === "cashFlowStatement" && (
                  <TableRow>
                    <TableHead className="w-[200px]">Name</TableHead>
                    {financialStatement.incomeStatement.map((s, i) => {
                      const date = new Date(s.date);
                      const formattedDate = `${date.getDate()}-${
                        date.getMonth() + 1
                      }-${date.getFullYear().toString()}`;

                      return (
                        <TableHead key={i} className="text-center">
                          {formattedDate}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                )}
              </TableHeader>
              {activeRange === "incomeStatement" && (
                <TableBody>
                  {/* Revenue */}
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center font-bold text-white"
                    >
                      Revenue
                    </TableCell>
                  </TableRow>
                  {renderRow("Total Revenue", (s) => s.revenue.totalRevenue)}
                  {renderRow(
                    "Operating Revenue",
                    (s) => s.revenue.operatingRevenue
                  )}
                  {renderRow(
                    "Non-Operating Revenue",
                    (s) => s.revenue.nonOperatingRevenue
                  )}

                  {/* Cost of Revenue */}
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center font-bold text-white"
                    >
                      Cost of Revenue
                    </TableCell>
                  </TableRow>
                  {renderRow(
                    "Cost of Revenue",
                    (s) => s.costOfRevenue.costOfRevenue
                  )}

                  {/* Gross Profit */}
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center font-bold text-white"
                    >
                      Gross Profit
                    </TableCell>
                  </TableRow>
                  {renderRow("Gross Profit", (s) => s.grossProfit.grossProfit)}

                  {/* Operating Expenses */}
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center font-bold text-white"
                    >
                      Operating Expenses
                    </TableCell>
                  </TableRow>
                  {renderRow(
                    "R&D",
                    (s) => s.operatingExpenses.researchAndDevelopment
                  )}
                  {renderRow(
                    "SG&A",
                    (s) => s.operatingExpenses.sellingGeneralAndAdministrative
                  )}
                  {renderRow(
                    "Other Op. Expenses",
                    (s) => s.operatingExpenses.otherOperatingExpenses
                  )}
                  {renderRow(
                    "Total Op. Expenses",
                    (s) => s.operatingExpenses.totalOperatingExpenses
                  )}

                  {/* And so on for other sections... */}
                </TableBody>
              )}
              {activeRange === "balanceSheet" && (
                <TableBody>
                  {/* Assets */}
                  {/* <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center font-bold text-white"
                    >
                      Assets
                    </TableCell>
                  </TableRow> */}

                  {/* Current Assets */}
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center font-semibold text-white"
                    >
                      Current Assets
                    </TableCell>
                  </TableRow>
                  {renderRow(
                    "Cash & Cash Equivalents",
                    (s) => s.assets.currentAssets.cashAndCashEquivalents
                  )}
                  {renderRow(
                    "Short-Term Investments",
                    (s) => s.assets.currentAssets.shortTermInvestments
                  )}
                  {renderRow(
                    "Accounts Receivable",
                    (s) => s.assets.currentAssets.accountsReceivable
                  )}
                  {renderRow(
                    "Inventory",
                    (s) => s.assets.currentAssets.inventory
                  )}
                  {renderRow(
                    "Other Current Assets",
                    (s) => s.assets.currentAssets.otherCurrentAssets
                  )}
                  {renderRow(
                    "Total Current Assets",
                    (s) => s.assets.currentAssets.totalCurrentAssets
                  )}

                  {/* Non-Current Assets */}
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center font-semibold text-white"
                    >
                      Non-Current Assets
                    </TableCell>
                  </TableRow>
                  {renderRow(
                    "PPE (Net)",
                    (s) =>
                      s.assets.nonCurrentAssets.propertyPlantAndEquipmentNet
                  )}
                  {renderRow(
                    "Goodwill",
                    (s) => s.assets.nonCurrentAssets.goodwill
                  )}
                  {renderRow(
                    "Intangible Assets",
                    (s) => s.assets.nonCurrentAssets.intangibleAssets
                  )}
                  {renderRow(
                    "Long-Term Investments",
                    (s) => s.assets.nonCurrentAssets.longTermInvestments
                  )}
                  {renderRow(
                    "Other Non-Current Assets",
                    (s) => s.assets.nonCurrentAssets.otherNonCurrentAssets
                  )}
                  {renderRow(
                    "Total Non-Current Assets",
                    (s) => s.assets.nonCurrentAssets.totalNonCurrentAssets
                  )}

                  {/* Total Assets */}
                  {renderRow("Total Assets", (s) => s.assets.totalAssets)}

                  {/* Liabilities */}
                  <TableRow>
                    {/* <TableCell
                      colSpan={6}
                      className="text-2xl text-center font-bold text-white"
                    >
                      Liabilities
                    </TableCell> */}
                  </TableRow>

                  {/* Current Liabilities */}
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center font-semibold text-white"
                    >
                      Current Liabilities
                    </TableCell>
                  </TableRow>
                  {renderRow(
                    "Accounts Payable",
                    (s) =>
                      s.liabilitiesAndShareholdersEquity.currentLiabilities
                        .accountsPayable
                  )}
                  {renderRow(
                    "Short-Term Debt",
                    (s) =>
                      s.liabilitiesAndShareholdersEquity.currentLiabilities
                        .shortTermDebt
                  )}
                  {renderRow(
                    "Deferred Revenue",
                    (s) =>
                      s.liabilitiesAndShareholdersEquity.currentLiabilities
                        .deferredRevenue
                  )}
                  {renderRow(
                    "Other Current Liabilities",
                    (s) =>
                      s.liabilitiesAndShareholdersEquity.currentLiabilities
                        .otherCurrentLiabilities
                  )}
                  {renderRow(
                    "Total Current Liabilities",
                    (s) =>
                      s.liabilitiesAndShareholdersEquity.currentLiabilities
                        .totalCurrentLiabilities
                  )}

                  {/* Non-Current Liabilities */}
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center font-semibold text-white"
                    >
                      Non-Current Liabilities
                    </TableCell>
                  </TableRow>
                  {renderRow(
                    "Long-Term Debt",
                    (s) =>
                      s.liabilitiesAndShareholdersEquity.nonCurrentLiabilities
                        .longTermDebt
                  )}
                  {renderRow(
                    "Deferred Tax Liabilities",
                    (s) =>
                      s.liabilitiesAndShareholdersEquity.nonCurrentLiabilities
                        .deferredTaxLiabilities
                  )}
                  {renderRow(
                    "Other Non-Current Liabilities",
                    (s) =>
                      s.liabilitiesAndShareholdersEquity.nonCurrentLiabilities
                        .otherNonCurrentLiabilities
                  )}
                  {renderRow(
                    "Total Non-Current Liabilities",
                    (s) =>
                      s.liabilitiesAndShareholdersEquity.nonCurrentLiabilities
                        .totalNonCurrentLiabilities
                  )}

                  {/* Total Liabilities */}
                  {renderRow(
                    "Total Liabilities",
                    (s) => s.liabilitiesAndShareholdersEquity.totalLiabilities
                  )}

                  {/* Shareholders' Equity */}
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center font-bold text-white"
                    >
                      Shareholders' Equity
                    </TableCell>
                  </TableRow>
                  {renderRow(
                    "Common Stock",
                    (s) =>
                      s.liabilitiesAndShareholdersEquity.shareholdersEquity
                        .commonStock
                  )}
                  {renderRow(
                    "Retained Earnings",
                    (s) =>
                      s.liabilitiesAndShareholdersEquity.shareholdersEquity
                        .retainedEarnings
                  )}
                  {renderRow(
                    "Accum. Other Comp. Income",
                    (s) =>
                      s.liabilitiesAndShareholdersEquity.shareholdersEquity
                        .accumulatedOtherComprehensiveIncome
                  )}
                  {renderRow(
                    "Total Shareholders' Equity",
                    (s) =>
                      s.liabilitiesAndShareholdersEquity.shareholdersEquity
                        .totalShareholdersEquity
                  )}

                  {/* Total Liabilities & Shareholders' Equity */}
                  {renderRow(
                    "Total Liabilities & Equity",
                    (s) =>
                      s.liabilitiesAndShareholdersEquity
                        .totalLiabilitiesAndShareholdersEquity
                  )}
                </TableBody>
              )}
              {activeRange === "cashFlowStatement" && (
                <TableBody>
                  {/* Cash Flows from Operating Activities */}
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center font-bold text-white"
                    >
                      Cash Flows from Operating Activities
                    </TableCell>
                  </TableRow>
                  {renderRow(
                    "Net Income",
                    (s) => s.cashFlowsFromOperatingActivities.netIncome
                  )}

                  {/* Adjustments to Reconcile Net Income */}
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center font-semibold text-white"
                    >
                      Adjustments to Reconcile Net Income
                    </TableCell>
                  </TableRow>
                  {renderRow(
                    "Depreciation & Amortization",
                    (s) =>
                      s.cashFlowsFromOperatingActivities
                        .adjustmentsToReconcileNetIncomeToNetCashProvidedByOperatingActivities
                        .depreciationAndAmortization
                  )}
                  {renderRow(
                    "Deferred Income Tax",
                    (s) =>
                      s.cashFlowsFromOperatingActivities
                        .adjustmentsToReconcileNetIncomeToNetCashProvidedByOperatingActivities
                        .deferredIncomeTax
                  )}
                  {renderRow(
                    "Stock-Based Compensation",
                    (s) =>
                      s.cashFlowsFromOperatingActivities
                        .adjustmentsToReconcileNetIncomeToNetCashProvidedByOperatingActivities
                        .stockBasedCompensation
                  )}

                  {/* Changes in Operating Assets and Liabilities */}
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center font-semibold text-white"
                    >
                      Changes in Operating Assets and Liabilities
                    </TableCell>
                  </TableRow>
                  {renderRow(
                    "Accounts Receivable",
                    (s) =>
                      s.cashFlowsFromOperatingActivities
                        .adjustmentsToReconcileNetIncomeToNetCashProvidedByOperatingActivities
                        .changesInOperatingAssetsAndLiabilities
                        .accountsReceivable
                  )}
                  {renderRow(
                    "Inventory",
                    (s) =>
                      s.cashFlowsFromOperatingActivities
                        .adjustmentsToReconcileNetIncomeToNetCashProvidedByOperatingActivities
                        .changesInOperatingAssetsAndLiabilities.inventory
                  )}
                  {renderRow(
                    "Accounts Payable",
                    (s) =>
                      s.cashFlowsFromOperatingActivities
                        .adjustmentsToReconcileNetIncomeToNetCashProvidedByOperatingActivities
                        .changesInOperatingAssetsAndLiabilities.accountsPayable
                  )}
                  {renderRow(
                    "Other Working Capital Changes",
                    (s) =>
                      s.cashFlowsFromOperatingActivities
                        .adjustmentsToReconcileNetIncomeToNetCashProvidedByOperatingActivities
                        .changesInOperatingAssetsAndLiabilities
                        .otherWorkingCapitalChanges
                  )}

                  {renderRow(
                    "Other Non-Cash Items",
                    (s) =>
                      s.cashFlowsFromOperatingActivities
                        .adjustmentsToReconcileNetIncomeToNetCashProvidedByOperatingActivities
                        .otherNonCashItems
                  )}
                  {renderRow(
                    "Net Cash Provided by Operating Activities",
                    (s) =>
                      s.cashFlowsFromOperatingActivities
                        .netCashProvidedByOperatingActivities
                  )}

                  {/* Cash Flows from Investing Activities */}
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center font-bold text-white"
                    >
                      Cash Flows from Investing Activities
                    </TableCell>
                  </TableRow>
                  {renderRow(
                    "Investments in Property, Plant & Equipment",
                    (s) =>
                      s.cashFlowsFromInvestingActivities
                        .investmentsInPropertyPlantAndEquipment
                  )}
                  {renderRow(
                    "Acquisitions (Net)",
                    (s) => s.cashFlowsFromInvestingActivities.acquisitionsNet
                  )}
                  {renderRow(
                    "Purchases of Investments",
                    (s) =>
                      s.cashFlowsFromInvestingActivities.purchasesOfInvestments
                  )}
                  {renderRow(
                    "Sales/Maturities of Investments",
                    (s) =>
                      s.cashFlowsFromInvestingActivities
                        .salesMaturitiesOfInvestments
                  )}
                  {renderRow(
                    "Other Investing Activities",
                    (s) =>
                      s.cashFlowsFromInvestingActivities
                        .otherInvestingActivities
                  )}
                  {renderRow(
                    "Net Cash Provided by Investing Activities",
                    (s) =>
                      s.cashFlowsFromInvestingActivities
                        .netCashProvidedByInvestingActivities
                  )}

                  {/* Cash Flows from Financing Activities */}
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center font-bold text-white"
                    >
                      Cash Flows from Financing Activities
                    </TableCell>
                  </TableRow>
                  {renderRow(
                    "Debt Issuance/Repayment",
                    (s) =>
                      s.cashFlowsFromFinancingActivities.debtIssuanceRepayment
                  )}
                  {renderRow(
                    "Common Stock Issuance/Repurchase",
                    (s) =>
                      s.cashFlowsFromFinancingActivities
                        .commonStockIssuanceRepurchase
                  )}
                  {renderRow(
                    "Dividends Paid",
                    (s) => s.cashFlowsFromFinancingActivities.dividendsPaid
                  )}
                  {renderRow(
                    "Other Financing Activities",
                    (s) =>
                      s.cashFlowsFromFinancingActivities
                        .otherFinancingActivities
                  )}
                  {renderRow(
                    "Net Cash Provided by Financing Activities",
                    (s) =>
                      s.cashFlowsFromFinancingActivities
                        .netCashProvidedByFinancingActivities
                  )}

                  {/* Other Cash Flow Items */}
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center font-bold text-white"
                    >
                      Other Cash Flow Items
                    </TableCell>
                  </TableRow>
                  {renderRow(
                    "Effect of Exchange Rate Changes on Cash",
                    (s) =>
                      s.otherCashFlowItems.effectOfExchangeRateChangesOnCash
                  )}
                  {renderRow(
                    "Net Change in Cash",
                    (s) => s.otherCashFlowItems.netChangeInCash
                  )}
                  {renderRow(
                    "Cash at Beginning of Period",
                    (s) => s.otherCashFlowItems.cashAtBeginningOfPeriod
                  )}
                  {renderRow(
                    "Cash at End of Period",
                    (s) => s.otherCashFlowItems.cashAtEndOfPeriod
                  )}
                </TableBody>
              )}
            </Table>
          </div>
        </div>
      </div>
      <div className="w-3/12 flex flex-col items-center p-4 text-white">
        <div className=" pb-1 w-full flex flex-row items-center justify-between text-xs border border-t-0 border-r-0 border-l-0 border-b-[var(--variant-5)] border-dashed">
          <p>Previous close</p>
          <p>{appleData1d.chart.result[0].meta.previousClose}</p>
        </div>

        <div className="mt-4 pb-1 w-full flex flex-row items-center justify-between text-xs border border-t-0 border-r-0 border-l-0 border-b-[var(--variant-5)] border-dashed">
          <p>Open</p>
          <p>{appleData1d.chart.result[0].meta.open}</p>
        </div>
        <div className="mt-4 pb-1 w-full flex flex-row items-center justify-between text-xs border border-t-0 border-r-0 border-l-0 border-b-[var(--variant-5)] border-dashed">
          <p>Bid</p>
          <p>null</p>
        </div>
        <div className="mt-4 pb-1 w-full flex flex-row items-center justify-between text-xs border border-t-0 border-r-0 border-l-0 border-b-[var(--variant-5)] border-dashed">
          <p>Ask</p>
          <p>null</p>
        </div>
        <div className="mt-4 pb-1 w-full flex flex-row items-center justify-between text-xs border border-t-0 border-r-0 border-l-0 border-b-[var(--variant-5)] border-dashed">
          <p>Day's Range</p>
          <p>{appleData1d.chart.result[0].meta.dayRange}</p>
        </div>
        <div className="mt-4 pb-1 w-full flex flex-row items-center justify-between text-xs border border-t-0 border-r-0 border-l-0 border-b-[var(--variant-5)] border-dashed">
          <p>52 Week Range</p>
          <p>{appleData1d.chart.result[0].meta.week52Range}</p>
        </div>
        <div className="mt-4 pb-1 w-full flex flex-row items-center justify-between text-xs border border-t-0 border-r-0 border-l-0 border-b-[var(--variant-5)] border-dashed">
          <p>Volume</p>
          <p>{appleData1d.chart.result[0].meta.volume}</p>
        </div>
        <div className="mt-4 pb-1 w-full flex flex-row items-center justify-between text-xs border border-t-0 border-r-0 border-l-0 border-b-[var(--variant-5)] border-dashed">
          <p>Avg. Volume</p>
          <p>{appleData1d.chart.result[0].meta.avgVolume}</p>
        </div>
        <div className="mt-4 pb-1 w-full flex flex-row items-center justify-between text-xs border border-t-0 border-r-0 border-l-0 border-b-[var(--variant-5)] border-dashed">
          <p>Market Cap (intraday)</p>
          <p>{appleData1d.chart.result[0].meta.marketCap}</p>
        </div>
        <div className="mt-4 pb-1 w-full flex flex-row items-center justify-between text-xs border border-t-0 border-r-0 border-l-0 border-b-[var(--variant-5)] border-dashed">
          <p>Beta (5Y Monthly)</p>
          <p>null</p>
        </div>
        <div className="mt-4 pb-1 w-full flex flex-row items-center justify-between text-xs border border-t-0 border-r-0 border-l-0 border-b-[var(--variant-5)] border-dashed">
          <p>PE Ratio (TTM)</p>
          <p>{appleData1d.chart.result[0].meta.peRatio}</p>
        </div>
        <div className="mt-4 pb-1 w-full flex flex-row items-center justify-between text-xs border border-t-0 border-r-0 border-l-0 border-b-[var(--variant-5)] border-dashed">
          <p>EPS (TTM)</p>
          <p>{appleData1d.chart.result[0].meta.eps}</p>
        </div>
        <div className="mt-4 pb-1 w-full flex flex-row items-center justify-between text-xs border border-t-0 border-r-0 border-l-0 border-b-[var(--variant-5)] border-dashed">
          <p>Earnings Date</p>
          <p>{appleData1d.chart.result[0].meta.earningsDate}</p>
        </div>
        <div className="mt-4 pb-1 w-full flex flex-row items-center justify-between text-xs border border-t-0 border-r-0 border-l-0 border-b-[var(--variant-5)] border-dashed">
          <p>Forward Dividend & Yield</p>
          <p>null</p>
        </div>
        <div className="mt-4 pb-1 w-full flex flex-row items-center justify-between text-xs border border-t-0 border-r-0 border-l-0 border-b-[var(--variant-5)] border-dashed">
          <p>Ex-Dividend Date</p>
          <p>null</p>
        </div>
        <div className="mt-4 pb-1 w-full flex flex-row items-center justify-between text-xs border border-t-0 border-r-0 border-l-0 border-b-[var(--variant-5)] border-dashed">
          <p>1y Target Est</p>
          <p>null</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialsSection;
