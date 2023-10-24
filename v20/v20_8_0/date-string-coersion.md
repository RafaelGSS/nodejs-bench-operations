## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|773,224|97|
|Using brackets {}|799,264|98|
|Using '' + |784,022|99|
|Using date.toString()|875,372|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":773223.9457075356,"samples":6},{"name":"Using brackets {}","opsSec":799263.5287504684,"samples":5},{"name":"Using '' + ","opsSec":784021.9795813628,"samples":4},{"name":"Using date.toString()","opsSec":875371.8222652371,"samples":4}]}-->
