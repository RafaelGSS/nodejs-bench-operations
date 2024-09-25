## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,288,096|7144049|
|Length = 10_000 - Array.at|13,819,150|6909576|
|Length = 1_000_000 - Array.at|14,934,496|7467249|
|Length = 100 - Array[length - 1]|15,288,655|7644328|
|Length = 10_000 - Array[length - 1]|14,470,854|7235428|
|Length = 1_000_000 - Array[length - 1]|14,432,404|7216203|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:42:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14288096.765711948,"samples":7144049},{"name":"Length = 10_000 - Array.at","opsSec":13819150.19031139,"samples":6909576},{"name":"Length = 1_000_000 - Array.at","opsSec":14934496.393334994,"samples":7467249},{"name":"Length = 100 - Array[length - 1]","opsSec":15288655.486895287,"samples":7644328},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14470854.434669524,"samples":7235428},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14432404.701389557,"samples":7216203}]}-->
