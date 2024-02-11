"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";
import { FaFire, FaQuestionCircle } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { MdEditNote } from "react-icons/md";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const IconDict: Record<"note" | "info" | "tip" | "question" | "default", React.ReactNode> = {
	note: <MdEditNote className="h-5 w-5 text-blue-500" />,
	info: <FaCircleInfo className="h-5 w-5 text-sky-500" />,
	tip: <FaFire className="h-5 w-5 text-teal-500" />,
	question: <FaQuestionCircle className="h-5 w-5 text-lime-500" />,
	default: <MdEditNote className="h-5 w-5" />,
};

const borderColors = {
	note: "border-blue-500",
	info: "border-sky-500",
	tip: "border-teal-500",
	question: "border-lime-500",
	default: "",
};

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & { variant: keyof typeof IconDict }
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn(`m-5 rounded-md border px-6 py-2 ${borderColors[props.variant]}`, className)}
		{...props}
	/>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { variant?: keyof typeof IconDict }
>(({ variant, className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				"flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180",
				className
			)}
			{...props}>
			<div className="flex w-full flex-row items-center gap-2">
				{/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
				{variant && IconDict[variant]}
				{children}
			</div>
			<ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
		{...props}>
		<div className={cn("border-t py-4", className)}>{children}</div>
	</AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
