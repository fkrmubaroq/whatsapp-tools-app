import { Contact } from "../context/campaign-schema";

export const exportToCSV = (contacts: Contact[]) => {
  const headers = ["Phone", "Name", "Status", "Timestamp"];
  const csvContent = [
    headers.join(","),
    ...contacts.map((c) =>
      [
        c.phone,
        c.name || "",
        c.status,
        c.timestamp ? new Date(c.timestamp).toLocaleString() : "",
      ].join(","),
    ),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `wa_campaign_export_${new Date().toISOString().slice(0, 10)}.csv`,
  );
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
