## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,985,477|3993160|
|Adding property in the object creation - small object|7,514,344|3757202|
|Adding property after the function creation - small class|257,375|128890|
|Adding property in the function creation - small class|275,752|137877|
|Adding property after the class creation - small class|263,452|131727|
|Adding property in the class creation - small class|265,404|132703|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:35:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7985477.8515057815,"samples":3993160},{"name":"Adding property in the object creation - small object","opsSec":7514344.892163078,"samples":3757202},{"name":"Adding property after the function creation - small class","opsSec":257375.96554701307,"samples":128890},{"name":"Adding property in the function creation - small class","opsSec":275752.9201515647,"samples":137877},{"name":"Adding property after the class creation - small class","opsSec":263452.2569998677,"samples":131727},{"name":"Adding property in the class creation - small class","opsSec":265404.20745998283,"samples":132703}]}-->
