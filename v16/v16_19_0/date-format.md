## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,142|73|
|Intl.DateTimeFormat().format(new Date())|5,469|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,802|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|5,301|77|
|Reusing Intl.DateTimeFormat()|297,670|66|
|Date.toLocaleDateString()|393,486|84|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,825|71|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":5142.314040134328,"cycles":7,"stats":{"deviation":0.00009699162160576501,"mean":0.000194464980589532,"moe":0.00002224994089585741,"rme":11.441618346092653,"sem":0.000011352010661151741,"variance":9.407374661715902e-9}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":5469.286639738427,"cycles":7,"stats":{"deviation":0.000022645511821608727,"mean":0.00018283920113717532,"moe":0.000005194895097591459,"rme":2.841237035209962,"sem":0.000002650456682444622,"variance":5.128192056626205e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":5801.589558929024,"cycles":5,"stats":{"deviation":0.00025472295362741177,"mean":0.000172366554000866,"moe":0.00005617079979001096,"rme":32.587992557842014,"sem":0.000028658571321434165,"variance":6.488378310467257e-8}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":5301.470182774071,"cycles":5,"stats":{"deviation":0.00003326160294131437,"mean":0.00018862692149986505,"moe":0.000007429402432520997,"rme":3.938675547183922,"sem":0.000003790511445163774,"variance":1.1063342302256525e-9}},{"name":"Reusing Intl.DateTimeFormat()","hz":297669.8971812719,"cycles":3,"stats":{"deviation":0.000006603766469275523,"mean":0.0000033594260268482253,"moe":0.0000015932202231335979,"rme":47.42537000073012,"sem":8.12867460782448e-7,"variance":4.360973158072771e-11}},{"name":"Date.toLocaleDateString()","hz":393485.8188579801,"cycles":3,"stats":{"deviation":1.8256348734655708e-7,"mean":0.0000025413876487399604,"moe":3.904184666203316e-8,"rme":1.5362413003537814,"sem":1.991930952144549e-8,"variance":3.332942691213651e-14}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":6825.309385498568,"cycles":3,"stats":{"deviation":0.00006974849712882154,"mean":0.00014651350488589654,"moe":0.00001622414246749812,"rme":11.073479185508083,"sem":0.000008277623707907204,"variance":4.864852851729228e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->
