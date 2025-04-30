import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Stock, StockScreeningResponse } from "@/types/types";
import { stockScreening } from "@/global/constants";
import Link from "next/link";

const StockScreeningTable = () => {
  const stocks: Stock[] = stockScreening.filtered_data.result;

  return (
    <div className="overflow-x-auto w-full px-8 text-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Symbol</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Sector</TableHead>
            <TableHead>Industry</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Dividend</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Beta</TableHead>
            <TableHead>Exchange</TableHead>
            <TableHead>Country</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stocks.map((stock) => (
            <TableRow key={stock.symbol}>
              <TableCell>
                <Link className="underline" href={"/"}>
                  {stock.symbol}
                </Link>
              </TableCell>
              <TableCell>{stock.companyName}</TableCell>
              <TableCell>{stock.sector || "N/A"}</TableCell>
              <TableCell>{stock.industry || "N/A"}</TableCell>
              <TableCell>{(stock.marketCap / 1e9).toFixed(2)} B</TableCell>
              <TableCell>${stock.price.toFixed(2)}</TableCell>
              <TableCell>{stock.lastAnnualDividend}</TableCell>
              <TableCell>{stock.volume.toLocaleString()}</TableCell>
              <TableCell>{stock.beta}</TableCell>
              <TableCell>{stock.exchangeShortName}</TableCell>
              <TableCell>{stock.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StockScreeningTable;
