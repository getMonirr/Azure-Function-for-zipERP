interface Money {
  amount: string;
  currency_code: string;
}

interface LineItem {
  id: number;
  admin_graphql_api_id: string;
  current_quantity: number;
  // Add more properties based on the JSON structure...
}

interface TaxLine {
  price: string;
  rate: number;
  title: string;
  price_set: any; // Define the nested structure as needed
  channel_liable: boolean;
}

interface DiscountAllocation {
  target_type: string;
  type: string;
  value: string;
  value_type: string;
  allocation_method: string;
  target_selection: string;
  title: string;
  description: string;
}

interface Fulfillment {
  id: number;
  admin_graphql_api_id: string;
  created_at: string;
  location_id: number;
  name: string;
  order_id: number;
  origin_address: any; // Define the nested structure as needed
  receipt: any; // Define the nested structure as needed
  service: string;
  shipment_status: string;
  status: string;
  tracking_company: string;
  tracking_number: string;
  tracking_numbers: string[];
  tracking_url: string;
  tracking_urls: string[];
  updated_at: string;
  line_items: LineItem[];
}

interface Address {
  first_name: string;
  address1: string;
  phone: string;
  city: string;
  zip: string;
  province: string;
  country: string;
  last_name: string;
  address2: string;
  company: string;
  latitude: number | null;
  longitude: number | null;
  name: string;
  country_code: string;
  province_code: string;
}

interface Customer {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  state: string;
  note: string | null;
  verified_email: boolean;
  multipass_identifier: string | null;
  tax_exempt: boolean;
  phone: string | null;
  email_marketing_consent: {
    state: string;
    opt_in_level: string;
    consent_updated_at: string;
  };
  sms_marketing_consent: any; // Define the nested structure as needed
  tags: string;
  currency: string;
  tax_exemptions: any[]; // Define the nested structure as needed
  admin_graphql_api_id: string;
  default_address: Address;
}

interface ShippingLine {
  id: number;
  carrier_identifier: string | null;
  code: string;
  discounted_price: string;
  discounted_price_set: any; // Define the nested structure as needed
  phone: string | null;
  price: string;
  price_set: any; // Define the nested structure as needed
  requested_fulfillment_service_id: string | null;
  source: any; // Define the nested structure as needed
  title: string;
  tax_lines: any[]; // Define the nested structure as needed
  discount_allocations: any[]; // Define the nested structure as needed
}

export interface OrderDetails {
  id: number;
  admin_graphql_api_id: string;
  app_id: number;
  browser_ip: string | null;
  // Add more properties based on the JSON structure...

  current_subtotal_price_set: {
    shop_money: Money;
    presentment_money: Money;
  };

  current_total_discounts_set: {
    shop_money: Money;
    presentment_money: Money;
  };

  current_total_price_set: {
    shop_money: Money;
    presentment_money: Money;
  };

  current_total_tax_set: {
    shop_money: Money;
    presentment_money: Money;
  };

  discount_codes: {
    code: string;
    amount: string;
    type: string;
  }[];

  note_attributes: {
    name: string;
    value: string;
  }[];

  tax_lines: TaxLine[];

  customer: Customer;

  discount_applications: DiscountAllocation[];

  fulfillments: Fulfillment[];

  line_items: LineItem[];

  billing_address: Address;

  shipping_address: Address;

  shipping_lines: ShippingLine[];
}
