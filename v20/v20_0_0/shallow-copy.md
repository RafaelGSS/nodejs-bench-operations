## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|22,153,029|11090890|
|{ ...object, __proto__: null }|20,518,580|10259758|
|{ ...object, newProp: true }|824,012|413538|
|structuredClone|266,017|133011|
|JSON.parse + JSON.stringify|206,963|103485|
|loop + object.keys starting with {}|1,545,289|772867|
|loop + object.keys starting with { __proto__: null }|819,765|409883|
|loop + object.keys starting with { randomProp: true }|608,042|304130|
|object.keys + reduce(FN, {})|1,569,627|784816|
|object.keys + reduce(FN, { __proto__: null })|826,766|413603|
|object.keys + reduce(FN, { newProp: true })|607,022|303512|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:11:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":22153029.974922787,"samples":11090890},{"name":"{ ...object, __proto__: null }","opsSec":20518580.065488894,"samples":10259758},{"name":"{ ...object, newProp: true }","opsSec":824012.7113213325,"samples":413538},{"name":"structuredClone","opsSec":266017.54154600366,"samples":133011},{"name":"JSON.parse + JSON.stringify","opsSec":206963.79356975842,"samples":103485},{"name":"loop + object.keys starting with {}","opsSec":1545289.3182740374,"samples":772867},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":819765.3736992546,"samples":409883},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":608042.1093262072,"samples":304130},{"name":"object.keys + reduce(FN, {})","opsSec":1569627.1624090853,"samples":784816},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":826766.214940222,"samples":413603},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":607022.2262810548,"samples":303512}]}-->
