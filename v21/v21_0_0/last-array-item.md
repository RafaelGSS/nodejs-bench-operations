## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,365,865|8182934|
|Length = 10_000 - Array.at|16,389,806|8194904|
|Length = 1_000_000 - Array.at|16,436,651|8218326|
|Length = 100 - Array[length - 1]|16,314,390|8157196|
|Length = 10_000 - Array[length - 1]|16,440,640|8220321|
|Length = 1_000_000 - Array[length - 1]|16,432,322|8216162|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:51:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":16365865.7793161,"samples":8182934},{"name":"Length = 10_000 - Array.at","opsSec":16389806.986335188,"samples":8194904},{"name":"Length = 1_000_000 - Array.at","opsSec":16436651.091511248,"samples":8218326},{"name":"Length = 100 - Array[length - 1]","opsSec":16314390.581795752,"samples":8157196},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16440640.722098885,"samples":8220321},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16432322.566769183,"samples":8216162}]}-->
