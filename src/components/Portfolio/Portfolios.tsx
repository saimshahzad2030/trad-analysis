import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Link from "next/link";
import { ChevronLeft, Tickets } from "lucide-react";
type TabKey = string | null; // or e.g. 'overview' | 'holdings' | 'analytics'

interface PortfoliosProps {
  setTabSelected: React.Dispatch<React.SetStateAction<TabKey>>;
}
const Portfolios: React.FC<PortfoliosProps> = ({ setTabSelected }) => {
  const portfolios = [
    {
      portfolioName: "Tech Growth Fund",
      symbols: 5,
      costBasis: "$10,500",
      marketValue: "$12,300",
      dayChange: "+$300",
      unrealizedGainLoss: "+$1,800",
      realizedGainLoss: "+$1,200",
    },
    {
      portfolioName: "Dividend Portfolio",
      symbols: 10,
      costBasis: "$15,000",
      marketValue: "$16,200",
      dayChange: "+$200",
      unrealizedGainLoss: "+$1,200",
      realizedGainLoss: "+$800",
    },
    {
      portfolioName: "Global Stocks",
      symbols: 8,
      costBasis: "$25,000",
      marketValue: "$24,500",
      dayChange: "-$500",
      unrealizedGainLoss: "-$500",
      realizedGainLoss: "+$500",
    },
    {
      portfolioName: "Crypto Investments",
      symbols: 3,
      costBasis: "$5,000",
      marketValue: "$5,200",
      dayChange: "+$200",
      unrealizedGainLoss: "+$200",
      realizedGainLoss: "$0",
    },
    {
      portfolioName: "Real Estate Fund",
      symbols: 2,
      costBasis: "$30,000",
      marketValue: "$31,000",
      dayChange: "+$500",
      unrealizedGainLoss: "+$1,000",
      realizedGainLoss: "+$500",
    },
  ];

  return (
    <div className="overflow-x-auto w-full mt-8 flex flex-col items-start">
      <button
        onClick={() => setTabSelected(null)}
        className="p-2 cursor-pointer flex flex-row items-center bg-white text-[var(--variant-2)] mb-2 rounded-lg"
      >
        <ChevronLeft />
        Go Back
      </button>
      <h1 className="font-bold text-3xl mb-4">Portfolios</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Portfolio Name</TableCell>
            <TableCell>Symbols</TableCell>
            <TableCell>Cost Basis (Including Cash)</TableCell>
            <TableCell>Market Value (Including Cash)</TableCell>
            <TableCell>Day Change</TableCell>
            <TableCell>Unrealized Gain/Loss</TableCell>
            <TableCell>Realized Gain/Loss</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {portfolios.map((portfolio, index) => (
            <TableRow key={index}>
              <TableCell className="flex flex-row items-center">
                <Tickets className="mr-2" />
                <Link href={"/"}>{portfolio.portfolioName}</Link>
              </TableCell>
              <TableCell>{portfolio.symbols}</TableCell>
              <TableCell>{portfolio.costBasis}</TableCell>
              <TableCell>{portfolio.marketValue}</TableCell>
              <TableCell>{portfolio.dayChange}</TableCell>
              <TableCell>{portfolio.unrealizedGainLoss}</TableCell>
              <TableCell>{portfolio.realizedGainLoss}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Portfolios;
