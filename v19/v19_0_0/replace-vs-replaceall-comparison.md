## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,623,444|92|
|Using replaceAll()|2,260,624|94|
|Using replaceAll(//g)|2,279,754|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2623444.2744939164,"samples":5},{"name":"Using replaceAll()","opsSec":2260624.32446433,"samples":5},{"name":"Using replaceAll(//g)","opsSec":2279753.9784427676,"samples":5}]}-->
