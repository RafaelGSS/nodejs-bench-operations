## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,731|84|
|Intl.DateTimeFormat().format(new Date())|8,055|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,378|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,053|80|
|Reusing Intl.DateTimeFormat()|480,486|96|
|Date.toLocaleDateString()|487,818|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,334|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":7730.655349835371,"cycles":6,"stats":{"deviation":0.00008775035593930576,"mean":0.0001293551393442078,"moe":0.000018765723589722033,"rme":14.507134146241645,"sem":0.000009574348770266343,"variance":7.700124967474853e-9}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":8055.1087368482295,"cycles":4,"stats":{"deviation":0.0000256350587066226,"mean":0.00012414481699365315,"moe":0.000005763464089874862,"rme":4.642532994486203,"sem":0.0000029405429029973784,"variance":6.571562348919872e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":9377.975724101101,"cycles":4,"stats":{"deviation":0.00001644984897439069,"mean":0.00010663282028231654,"moe":0.000003881445039751615,"rme":3.640009735722328,"sem":0.000001980329101914089,"variance":2.705975312802624e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":9053.411231731512,"cycles":3,"stats":{"deviation":0.00015959004737600317,"mean":0.00011045560335258789,"moe":0.00003497171105758519,"rme":31.661328168161084,"sem":0.00001784270972325775,"variance":2.546898322147493e-8}},{"name":"Reusing Intl.DateTimeFormat()","hz":480486.45465566264,"cycles":6,"stats":{"deviation":1.0205990876617878e-7,"mean":0.0000020812241225752,"moe":2.0416233806558253e-8,"rme":0.9809723799134258,"sem":1.0416445819672579e-8,"variance":1.0416224977360736e-14}},{"name":"Date.toLocaleDateString()","hz":487818.4373731584,"cycles":4,"stats":{"deviation":7.678214135184833e-8,"mean":0.000002049943018523194,"moe":1.5202088390696476e-8,"rme":0.7415859003558187,"sem":7.756167546273712e-9,"variance":5.895497230575216e-15}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":10333.946682724743,"cycles":5,"stats":{"deviation":0.00003886925154859152,"mean":0.00009676844972228276,"moe":0.000008263286042834378,"rme":8.539235739075398,"sem":0.000004215962266752234,"variance":1.5108187159476838e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->
