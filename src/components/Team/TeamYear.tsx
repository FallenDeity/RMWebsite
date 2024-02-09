"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function DatePicker({ minDate, maxDate }: { minDate: Date; maxDate: Date }): React.ReactElement {
	const [date, setDate] = React.useState<Date | undefined>(maxDate);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"h-12 w-screen justify-start rounded-none border-x-0 border-t text-left font-normal xs:w-12 xs:rounded-full xs:border",
						!date && "text-muted-foreground"
					)}>
					<CalendarIcon className="h-4 w-4" />
					<p className="ml-2 block xs:hidden">{date ? format(date, "PPP") : <span>Pick a date</span>}</p>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0 xs:mr-3">
				<Calendar
					captionLayout="dropdown-buttons"
					mode="single"
					selected={date}
					onSelect={setDate}
					fromDate={minDate}
					toDate={maxDate}
				/>
			</PopoverContent>
		</Popover>
	);
}
