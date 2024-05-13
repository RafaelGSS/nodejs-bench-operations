## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,486,755|7743378|
|(short string) (true) String#slice and strict comparison|16,025,106|8012554|
|(long string) (true) String#endsWith|14,739,254|7369628|
|(long string) (true) String#slice and strict comparison|15,924,719|7962360|
|(short string) (false) String#endsWith|15,947,718|7973860|
|(short string) (false) String#slice and strict comparison|16,151,541|8075771|
|(long string) (false) String#endsWith|15,370,358|7685180|
|(long string) (false) String#slice and strict comparison|15,888,487|7944244|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:40:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15486755.163709529,"samples":7743378},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16025106.10903614,"samples":8012554},{"name":"(long string) (true) String#endsWith","opsSec":14739254.437675606,"samples":7369628},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15924719.10822047,"samples":7962360},{"name":"(short string) (false) String#endsWith","opsSec":15947718.437000765,"samples":7973860},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16151541.580068942,"samples":8075771},{"name":"(long string) (false) String#endsWith","opsSec":15370358.954893073,"samples":7685180},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15888487.555083701,"samples":7944244}]}-->
