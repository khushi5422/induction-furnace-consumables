export default function OrganizationSchema(){

const schema={

"@context":"https://schema.org",

"@type":"Organization",

"name":"Fieldman Induction",

"url":"https://inductionfurnaceconsumables.com",

"logo":
"https://www.inductionfurnaceconsumables.com/logo.svg",

"description":
"Manufacturer of industrial induction furnace and heating solutions."

};


return(

<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html:JSON.stringify(schema)
}}
/>

)

}