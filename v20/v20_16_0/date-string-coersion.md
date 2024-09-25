## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|972,544|486273|
|Using brackets {}|949,753|474877|
|Using '' + |969,032|484517|
|Using date.toString()|1,048,806|524404|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:45:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":972544.8504522928,"samples":486273},{"name":"Using brackets {}","opsSec":949753.084437841,"samples":474877},{"name":"Using '' + ","opsSec":969032.4224152304,"samples":484517},{"name":"Using date.toString()","opsSec":1048806.4288875693,"samples":524404}]}-->
