## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,964,146|2007280|
|Using delete property (proto: null)|16,794,321|8397169|
|Using delete property (cached proto: null)|3,957,022|1978558|
|Using undefined assignment|72,764,239|36383776|
|Using undefined assignment (proto: null)|18,096,959|9048909|
|Using undefined property (cached proto: null)|72,483,878|36243857|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:13:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using delete property","opsSec":3964146.521592165,"samples":2007280},{"name":"Using delete property (proto: null)","opsSec":16794321.91103961,"samples":8397169},{"name":"Using delete property (cached proto: null)","opsSec":3957022.123607139,"samples":1978558},{"name":"Using undefined assignment","opsSec":72764239.04419632,"samples":36383776},{"name":"Using undefined assignment (proto: null)","opsSec":18096959.842164285,"samples":9048909},{"name":"Using undefined property (cached proto: null)","opsSec":72483878.44308831,"samples":36243857}]}-->
