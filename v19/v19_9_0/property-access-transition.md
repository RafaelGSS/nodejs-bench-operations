## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,673,796|98|
|Adding property in the object creation - small object|2,700,208|99|
|Adding property after the function creation - small class|171,803|86|
|Adding property in the function creation - small class|172,613|84|
|Adding property after the class creation - small class|146,365|84|
|Adding property in the class creation - small class|147,373|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2673796.2264717594,"samples":4},{"name":"Adding property in the object creation - small object","opsSec":2700208.237373141,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":171802.7189695752,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":172613.4196577682,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":146364.76017923807,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":147372.7611018779,"samples":4}]}-->
