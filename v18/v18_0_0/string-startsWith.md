## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,829,823|6914912|
|(short string) (true) String#slice and strict comparison|13,749,487|6874744|
|(long string) (true) String#startsWith|13,654,870|6827436|
|(long string) (true) String#slice and strict comparison|13,432,575|6716288|
|(short string) (false) String#startsWith|14,270,679|7135340|
|(short string) (false) String#slice and strict comparison|14,377,077|7188540|
|(long string) (false) String#startsWith|13,994,789|6997395|
|(long string) (false) String#slice and strict comparison|14,093,322|7046662|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:02:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13829823.57403175,"samples":6914912},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13749487.931261642,"samples":6874744},{"name":"(long string) (true) String#startsWith","opsSec":13654870.877131864,"samples":6827436},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13432575.667532621,"samples":6716288},{"name":"(short string) (false) String#startsWith","opsSec":14270679.30910115,"samples":7135340},{"name":"(short string) (false) String#slice and strict comparison","opsSec":14377077.829369416,"samples":7188540},{"name":"(long string) (false) String#startsWith","opsSec":13994789.007877579,"samples":6997395},{"name":"(long string) (false) String#slice and strict comparison","opsSec":14093322.733763555,"samples":7046662}]}-->
