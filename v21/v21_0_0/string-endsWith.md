## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,486,200|7243101|
|(short string) (true) String#slice and strict comparison|12,683,808|6341905|
|(long string) (true) String#endsWith|13,773,246|6886624|
|(long string) (true) String#slice and strict comparison|12,225,952|6112977|
|(short string) (false) String#endsWith|15,088,046|7544106|
|(short string) (false) String#slice and strict comparison|12,793,372|6396687|
|(long string) (false) String#endsWith|14,872,064|7436033|
|(long string) (false) String#slice and strict comparison|12,467,888|6233945|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:58:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14486200.870506195,"samples":7243101},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12683808.253702426,"samples":6341905},{"name":"(long string) (true) String#endsWith","opsSec":13773246.366926292,"samples":6886624},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12225952.690210478,"samples":6112977},{"name":"(short string) (false) String#endsWith","opsSec":15088046.559500622,"samples":7544106},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12793372.111368155,"samples":6396687},{"name":"(long string) (false) String#endsWith","opsSec":14872064.914438337,"samples":7436033},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12467888.648313822,"samples":6233945}]}-->
