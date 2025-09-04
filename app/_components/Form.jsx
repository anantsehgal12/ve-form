import React from 'react'
import '../globals.css'
import { User } from 'lucide-react';
import { Earth } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MapPinHouse } from 'lucide-react';
import { List } from 'lucide-react';
import { ListOrdered } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Form() {
  return (
    <form suppressHydrationWarning action="https://formsubmit.co/vs@anantsales.in" method="post" className='flex flex-col w-full gap-[1rem] p-6'>
     <div className='inline-flex gap-3'><User /><label htmlFor="1"><b>Full Nam</b></label></div>
      <input type="text" name="Name" id="1" placeholder="John Adams" required className='p-[0.9rem] bg-transparent border rounded-[5px] w-full'/>

      <div className='inline-flex gap-3'><Earth /><label htmlFor="1"><b>Country Code</b></label></div>
      <div className="sel w-full">
        <select name="Country Code" className='p-[0.9rem] bg-transparent border rounded-[5px] w-full' defaultValue="">
          <option value="" disabled className='bg-background color-foreground'>Select Code</option>
          <option className='bg-background color-foreground'>India [+91]</option>
        </select>
      </div>

      <div className='inline-flex gap-3'><Phone /><label htmlFor="1"><b>Contact No.</b></label></div>

      <input type="tel" name="Mobile No." placeholder="[+1 (415) 867-5309]" required className='p-[0.9rem] bg-transparent border rounded-[5px] w-full'/>

      <div className='inline-flex gap-3'><Mail /><label htmlFor="1"><b>Email</b></label></div>
      <input type="email" name="Email" placeholder="your@example.com" required className='p-[0.9rem] bg-transparent border rounded-[5px] w-full'/>

      <div className='inline-flex gap-3'><MapPinHouse /><label htmlFor="1"><b>Address</b></label></div>
      <input type="text" name="Address" placeholder="177A, Bleecker St, New York" max="300" className='p-[0.9rem] bg-transparent border rounded-[5px] w-full'/>

      <div className='inline-flex gap-3'><List /><label htmlFor="1"><b>Product Category Interested In</b></label></div>
      <div className="sel">
        <select name="Product Category Interested In" suppressHydrationWarning required className='p-[0.9rem] bg-transparent border rounded-[5px] w-full' defaultValue="">
          <ul>
            <li>
              <option value="" disabled className='bg-background color-foreground'>Select Category</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Rakhi Combos</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Decorative Dryfruit Boxes</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Lamp Collection</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Idol Products</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Glassware Collection</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>T-Light Collection</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Metal Products</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Exclusive Bag Zone</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Wooden Products</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Leather Products</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Other Products</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Only For Bulk Orders</option>
            </li>
          </ul>
        </select>
      </div>

      <div className='inline-flex gap-3'><ListOrdered /><label htmlFor="1"><b>Estimated Quantity Required</b></label></div>
      <div className="sel">
        <select name="Quantity" className='p-[0.9rem] bg-transparent border rounded-[5px] w-full' defaultValue="">
          <option className='bg-background color-foreground' value="" disabled>Select Quantity</option>
          <option className='bg-background color-foreground'>10-50</option>
          <option className='bg-background color-foreground'>51-100</option>
          <option className='bg-background color-foreground'>101-150</option>
          <option className='bg-background color-foreground'>151-200</option>
          <option className='bg-background color-foreground'>201-250</option>
          <option className='bg-background color-foreground'>251-300</option>
          <option className='bg-background color-foreground'>301-350</option>
          <option className='bg-background color-foreground'>351-400</option>
          <option className='bg-background color-foreground'>400 and above</option>
        </select>
      </div>
      <div className='inline-flex gap-3'><MessageSquare /><label htmlFor="1"><b>Describe Your Product Requirement</b></label></div>
        <textarea name="Describe Your Product Requirement" placeholder="Other than this, I want..." className='resize-none p-[0.9rem] bg-transparent border rounded-[5px] h-[6rem] w-full'></textarea>

        <div className="w-full"><Button asChild><button type="submit" className="cursor-pointer w-full text-2xl"> Send</button></Button></div>
        </form>
  )
}

export default Form