import { redirect } from "next/navigation";

export default function ServicesIndexPage() {
  // If user visits /services directly, redirect them to the services section on the homepage
  redirect("/#services");
}
