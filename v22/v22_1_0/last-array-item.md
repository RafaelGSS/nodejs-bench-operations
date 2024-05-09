## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,615,206|7807604|
|Length = 10_000 - Array.at|15,578,941|7789471|
|Length = 1_000_000 - Array.at|15,758,558|7879280|
|Length = 100 - Array[length - 1]|15,809,424|7904713|
|Length = 10_000 - Array[length - 1]|15,945,144|7972573|
|Length = 1_000_000 - Array[length - 1]|15,928,032|7964017|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:01:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15615206.126178524,"samples":7807604},{"name":"Length = 10_000 - Array.at","opsSec":15578941.657277789,"samples":7789471},{"name":"Length = 1_000_000 - Array.at","opsSec":15758558.928434655,"samples":7879280},{"name":"Length = 100 - Array[length - 1]","opsSec":15809424.260922426,"samples":7904713},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15945144.245744312,"samples":7972573},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15928032.375609828,"samples":7964017}]}-->
