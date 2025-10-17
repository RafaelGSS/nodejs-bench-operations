## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,499,323|3750589|
|Adding property in the object creation - small object|7,534,447|3767528|
|Adding property after the function creation - small class|244,765|122414|
|Adding property in the function creation - small class|285,461|142731|
|Adding property after the class creation - small class|282,433|141217|
|Adding property in the class creation - small class|274,620|144602|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:44:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3750589,"opsSec":7499323.057440388},{"name":"Adding property in the object creation - small object","samples":3767528,"opsSec":7534447.231732571},{"name":"Adding property after the function creation - small class","samples":122414,"opsSec":244765.5882017268},{"name":"Adding property in the function creation - small class","samples":142731,"opsSec":285461.564956575},{"name":"Adding property after the class creation - small class","samples":141217,"opsSec":282433.52438194497},{"name":"Adding property in the class creation - small class","samples":144602,"opsSec":274620.61966252606}]}-->
