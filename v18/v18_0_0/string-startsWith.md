## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,117,958|7058980|
|(short string) (true) String#slice and strict comparison|14,510,834|7255418|
|(long string) (true) String#startsWith|14,080,252|7040127|
|(long string) (true) String#slice and strict comparison|13,819,952|6909977|
|(short string) (false) String#startsWith|7,666,575|3833288|
|(short string) (false) String#slice and strict comparison|14,954,484|7477243|
|(long string) (false) String#startsWith|6,827,136|3413569|
|(long string) (false) String#slice and strict comparison|14,124,000|7062001|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:19:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14117958.588180244,"samples":7058980},{"name":"(short string) (true) String#slice and strict comparison","opsSec":14510834.52845841,"samples":7255418},{"name":"(long string) (true) String#startsWith","opsSec":14080252.539707696,"samples":7040127},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13819952.513985017,"samples":6909977},{"name":"(short string) (false) String#startsWith","opsSec":7666575.0524862185,"samples":3833288},{"name":"(short string) (false) String#slice and strict comparison","opsSec":14954484.858951932,"samples":7477243},{"name":"(long string) (false) String#startsWith","opsSec":6827136.786079739,"samples":3413569},{"name":"(long string) (false) String#slice and strict comparison","opsSec":14124000.462770889,"samples":7062001}]}-->
