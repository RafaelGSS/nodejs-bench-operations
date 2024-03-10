## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,200,740|90|
|Using replaceAll()|2,426,438|97|
|Using replaceAll(//g)|2,939,084|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3200739.929021321,"samples":5},{"name":"Using replaceAll()","opsSec":2426438.0662110434,"samples":5},{"name":"Using replaceAll(//g)","opsSec":2939084.0967092393,"samples":7}]}-->
