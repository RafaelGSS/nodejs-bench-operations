## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,729,727|7864864|
|(short string) (true) String#slice and strict comparison|17,272,878|8636440|
|(long string) (true) String#startsWith|14,556,056|7278029|
|(long string) (true) String#slice and strict comparison|16,045,291|8022646|
|(short string) (false) String#startsWith|16,025,079|8012540|
|(short string) (false) String#slice and strict comparison|16,799,183|8399592|
|(long string) (false) String#startsWith|16,168,332|8084167|
|(long string) (false) String#slice and strict comparison|16,997,612|8498807|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:47:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15729727.658023229,"samples":7864864},{"name":"(short string) (true) String#slice and strict comparison","opsSec":17272878.50915625,"samples":8636440},{"name":"(long string) (true) String#startsWith","opsSec":14556056.107854197,"samples":7278029},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16045291.023123864,"samples":8022646},{"name":"(short string) (false) String#startsWith","opsSec":16025079.811951067,"samples":8012540},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16799183.57143959,"samples":8399592},{"name":"(long string) (false) String#startsWith","opsSec":16168332.832166921,"samples":8084167},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16997612.431981068,"samples":8498807}]}-->
