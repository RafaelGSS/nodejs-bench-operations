## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,501,577|7250789|
|(short string) (true) String#slice and strict comparison|14,579,626|7289814|
|(long string) (true) String#startsWith|14,077,827|7038914|
|(long string) (true) String#slice and strict comparison|15,166,929|7583465|
|(short string) (false) String#startsWith|15,199,994|7599998|
|(short string) (false) String#slice and strict comparison|15,395,220|7697611|
|(long string) (false) String#startsWith|14,986,963|7493482|
|(long string) (false) String#slice and strict comparison|15,439,928|7719965|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:44:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14501577.390959356,"samples":7250789},{"name":"(short string) (true) String#slice and strict comparison","opsSec":14579626.746159712,"samples":7289814},{"name":"(long string) (true) String#startsWith","opsSec":14077827.77475345,"samples":7038914},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15166929.02939517,"samples":7583465},{"name":"(short string) (false) String#startsWith","opsSec":15199994.115084132,"samples":7599998},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15395220.645336956,"samples":7697611},{"name":"(long string) (false) String#startsWith","opsSec":14986963.37053075,"samples":7493482},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15439928.147231698,"samples":7719965}]}-->
