export type companyData = {
    chart: {
        result: [
            {
                meta: {
                    price: string; // e.g., "202.52"
                    priceChange: number; // e.g., 4.37
                    priceChangePercent: string; // e.g., "2.21%"
                    marketCap: string; // e.g., "$3.04T"
                    peRatio: string; // e.g., "29.06"
                    eps: string; // e.g., "6.97"
                    sharesOutstanding: string; // e.g., "$15.02B"
                    timestamp: string; // e.g., "2025-04-15 01:00:01"
                    previousClose: string; // e.g., "198.15"
                    open: string; // e.g., "211.44"
                    dayRange: string; // e.g., "201.1621 - 212.94"
                    week52Range: string; // e.g., "164.08 - 260.1"
                    volume: string; // e.g., "$100.65M"
                    avgVolume: string; // e.g., "$63.04M"
                    earningsDate: string; // e.g., "May 01, 2025"
                    companyName: string; // e.g., "Apple Inc."
                    website: string; // e.g., "https://www.apple.com"
                    fullTimeEmployees: string; // e.g., "$150000.00"
                    sector: string; // e.g., "Technology"
                    exDividendDate?: string;
                    industry: string; // e.g., "Consumer Electronics"
                    description: string; // Long text description
                    fiscalYearEnds: string; // e.g., "September 28, 2024"
                    currency: string; // e.g., "USD"
                    symbol: string; // e.g., "AAPL"
                    exchangeName: string; // e.g., "NASDAQ"
                    fullExchangeName: string; // e.g., "NASDAQ Global Select"
                    firstTradeDate: number; // e.g., 345409200
                    regularMarketTime: number; // e.g., 1744701285
                    hasPrePostMarketData: boolean; // e.g., true
                    gmtoffset: number; // e.g., -14400
                    timezone: string; // e.g., "EDT"
                    exchangeTimezoneName: string; // e.g., "America/New_York"
                    regularMarketPrice: number; // e.g., 202.52
                    fiftyTwoWeekHigh: number; // e.g., 260.1
                    fiftyTwoWeekLow: number; // e.g., 164.08
                    regularMarketDayHigh: number; // e.g., 212.94
                    regularMarketDayLow: number; // e.g., 201.1621
                    regularMarketVolume: number; // e.g., 100650083
                    priceAvg1Y: number; // e.g., 0
                    beta: number; // e.g., 1.259
                    longName: string; // e.g., "Apple Inc."
                    shortName: string; // e.g., "Apple Inc."
                    chartPreviousClose: number; // e.g., 198.15
                    priceHint: number; // e.g., 2
                    currentTradingPeriod: {
                        pre: {
                            timezone: string; // e.g., "EDT"
                            start: number; // e.g., 1744671600
                            end: number; // e.g., 1744691400
                            gmtoffset: number; // e.g., -14400
                        };
                        regular: {
                            timezone: string; // e.g., "EDT"
                            start: number; // e.g., 1744691400
                            end: number; // e.g., 1744714800
                            gmtoffset: number; // e.g., -14400
                        };
                        post: {
                            timezone: string; // e.g., "EDT"
                            start: number; // e.g., 1744714800
                            end: number; // e.g., 1744729200
                            gmtoffset: number; // e.g., -14400
                        };
                    };
                    dataGranularity: string; // e.g., "1m"
                    range: string; // e.g., "1d"
                    validRanges: string[]; // e.g., ["1d", "5d", "1m", ...]
                    instrumentType: string; // e.g., "EQUITY"
                };
                timestamp: number[]; // e.g., [1744628340, 1744628280, ...]
                events: {
                    dividends: {
                        [key: string]: {
                            amount: number; // e.g., 0.12
                            date: number; // e.g., 550695600
                        };
                    };
                };
                indicators: {
                    quote: [
                        {
                            close: number[]; // e.g., [202.51, 202.515, ...]
                            open: number[]; // e.g., [202.57, 202.54, ...]
                            high: number[]; // e.g., [202.72, 202.54, ...]
                            low: number[]; // e.g., [202.37, 202.4, ...]
                            volume: number[]; // e.g., [1522139, 606588, ...]
                        }
                    ];
                    adjclose: [
                        {
                            adjclose: number[]; // e.g., [202.51, 202.515, ...]
                        }
                    ];
                };
            }
        ];
        error: null;
    };
};
export type historicalDataType = {
    count: number; // e.g., 1
    next: string | null; // e.g., null
    previous: string | null; // e.g., null
    results: [
        {
            dates: string[]; // e.g., ["April 14, 2025", "April 11, 2025", ...]
            indicators: {
                quote: [
                    {
                        open: number[]; // e.g., [211.44, 186.1, ...]
                        high: number[]; // e.g., [212.94, 199.54, ...]
                        low: number[]; // e.g., [201.16, 186.06, ...]
                        close: number[]; // e.g., [202.52, 198.15, ...]
                        change: number[]; // e.g., [-8.92, 12.05, ...]
                        changePercent: number[]; // e.g., [-4.22, 6.48, ...]
                        volume: number[]; // e.g., [100846206, 87435915, ...]
                    }
                ];
                adjclose: [
                    {
                        adjclose: number[]; // e.g., [202.52, 198.15, ...]
                    }
                ];
            };
        }
    ];
};
interface Revenue {
    totalRevenue: string;
    operatingRevenue: string;
    nonOperatingRevenue: string;
}

interface CostOfRevenue {
    costOfRevenue: string;
}

interface GrossProfit {
    grossProfit: string;
}

interface OperatingExpenses {
    researchAndDevelopment: string;
    sellingGeneralAndAdministrative: string;
    otherOperatingExpenses: string;
    totalOperatingExpenses: string;
}

interface OperatingIncome {
    operatingIncome: string;
}

interface OtherIncomeExpenses {
    netNonOperatingInterestIncomeExpense: string;
    otherNonOperatingIncomeExpense: string;
    totalOtherIncomeExpenses: string;
}

interface PretaxIncome {
    pretaxIncome: string;
}

interface TaxProvision {
    taxProvision: string;
}

interface NetIncome {
    netIncomeFromContinuingOperations: string;
    netIncomeFromDiscontinuedOperations: string;
    netIncome: string;
    netIncomeAvailableToCommonStockholders: string;
}

interface EarningsPerShare {
    basicEPS: number;
    dilutedEPS: number;
}

interface SharesOutstanding {
    weightedAverageSharesOutstandingBasic: string;
    weightedAverageSharesOutstandingDiluted: string;
}

export interface IncomeStatement {
    date: string;
    period: string;
    revenue: Revenue;
    costOfRevenue: CostOfRevenue;
    grossProfit: GrossProfit;
    operatingExpenses: OperatingExpenses;
    operatingIncome: OperatingIncome;
    otherIncomeExpenses: OtherIncomeExpenses;
    pretaxIncome: PretaxIncome;
    taxProvision: TaxProvision;
    netIncome: NetIncome;
    earningsPerShare: EarningsPerShare;
    sharesOutstanding: SharesOutstanding;
}

interface CurrentAssets {
    cashAndCashEquivalents: string;
    shortTermInvestments: string;
    accountsReceivable: string;
    inventory: string;
    otherCurrentAssets: string;
    totalCurrentAssets: string;
}

interface NonCurrentAssets {
    propertyPlantAndEquipmentNet: string;
    goodwill: string;
    intangibleAssets: string;
    longTermInvestments: string;
    otherNonCurrentAssets: string;
    totalNonCurrentAssets: string;
}

interface Assets {
    currentAssets: CurrentAssets;
    nonCurrentAssets: NonCurrentAssets;
    totalAssets: string;
}

interface CurrentLiabilities {
    accountsPayable: string;
    shortTermDebt: string;
    deferredRevenue: string;
    otherCurrentLiabilities: string;
    totalCurrentLiabilities: string;
}

interface NonCurrentLiabilities {
    longTermDebt: string;
    deferredTaxLiabilities: string;
    otherNonCurrentLiabilities: string;
    totalNonCurrentLiabilities: string;
}

interface ShareholdersEquity {
    commonStock: string;
    retainedEarnings: string;
    accumulatedOtherComprehensiveIncome: string;
    totalShareholdersEquity: string;
}

interface LiabilitiesAndShareholdersEquity {
    currentLiabilities: CurrentLiabilities;
    nonCurrentLiabilities: NonCurrentLiabilities;
    totalLiabilities: string;
    shareholdersEquity: ShareholdersEquity;
    totalLiabilitiesAndShareholdersEquity: string;
}

export interface BalanceSheet {
    date: string;
    period: string;
    assets: Assets;
    liabilitiesAndShareholdersEquity: LiabilitiesAndShareholdersEquity;
}

interface ChangesInOperatingAssetsAndLiabilities {
    accountsReceivable: string;
    inventory: string;
    accountsPayable: string;
    otherWorkingCapitalChanges: string;
}

interface AdjustmentsToReconcileNetIncome {
    depreciationAndAmortization: string;
    deferredIncomeTax: string;
    stockBasedCompensation: string;
    changesInOperatingAssetsAndLiabilities: ChangesInOperatingAssetsAndLiabilities;
    otherNonCashItems: string;
}

interface CashFlowsFromOperatingActivities {
    netIncome: string;
    adjustmentsToReconcileNetIncomeToNetCashProvidedByOperatingActivities: AdjustmentsToReconcileNetIncome;
    netCashProvidedByOperatingActivities: string;
}

interface CashFlowsFromInvestingActivities {
    investmentsInPropertyPlantAndEquipment: string;
    acquisitionsNet: string;
    purchasesOfInvestments: string;
    salesMaturitiesOfInvestments: string;
    otherInvestingActivities: string;
    netCashProvidedByInvestingActivities: string;
}

interface CashFlowsFromFinancingActivities {
    debtIssuanceRepayment: string;
    commonStockIssuanceRepurchase: string;
    dividendsPaid: string;
    otherFinancingActivities: string;
    netCashProvidedByFinancingActivities: string;
}

interface OtherCashFlowItems {
    effectOfExchangeRateChangesOnCash: string;
    netChangeInCash: string;
    cashAtBeginningOfPeriod: string;
    cashAtEndOfPeriod: string;
}

export interface CashFlowStatement {
    period: string;
    cashFlowsFromOperatingActivities: CashFlowsFromOperatingActivities;
    cashFlowsFromInvestingActivities: CashFlowsFromInvestingActivities;
    cashFlowsFromFinancingActivities: CashFlowsFromFinancingActivities;
    otherCashFlowItems: OtherCashFlowItems;
}

export interface FinancialStatement {
    incomeStatement: IncomeStatement[];
    balanceSheet: BalanceSheet[];
    cashFlowStatement: CashFlowStatement[];
}
export type CompanyKey =
    | "pricePerformance"
    | "margin"
    | "earnings"
    | "financials"
    | "valuation"
    | "forwardDividendYield";

export interface Company {
    symbol: string;
    name: string;
    pricePerformance: {
        "1 Week": string;
        "3 Months": string;
        YTD: string;
        "1 Year": string;
        chartData?: any; // Replace `any` with the actual chart data structure if available
    };
    margin: {
        operating: string;
        gross: string;
        profit: string;
        chartData?: any;
    };
    earnings: {
        basicEPS: string;
        epsGrowth1Y: string;
        chartData?: any;
    };
    financials?: {
        revenueTTM: string;
        revenueGrowth3Y: string;
        chartData?: any;
    };
    valuation?: {
        peRatio: string;
        pbRatio: string;
        chartData?: any;
    };
    forwardDividendYield: {
        value: string;
        chartData?: any;
    };
    equityReturn: {
        returnOnAssets: string,
        returnOnCapital: string,
    };
    ownership: {
        institutional: string,
    };
    sector: string;
    ceo: string;
    industry: string;
    marketValue: {
        marketCap: string,
        chartData: { date: string, marketCap: number }[],
    };
    enterpriseValue: {
        value: string,
        chartData: { date: string, value: number }[
        ]
    };
    priceToEarnings: {
        ratio: string,
        chartData: { date: string, ratio: number }[
        ]
    };
    dilutedEPS: {
        value: string,
        chartData: { date: string, value: number }[
        ]
    }
}
