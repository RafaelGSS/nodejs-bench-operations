## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|241,817,202|99|
|(short string) (true) String#slice and strict comparison|907,157,588|96|
|(long string) (true) String#startsWith|148,746,338|96|
|(long string) (true) String#slice and strict comparison|904,148,457|99|
|(short string) (false) String#startsWith|485,509,270|95|
|(short string) (false) String#slice and strict comparison|906,785,181|100|
|(long string) (false) String#startsWith|363,965,874|95|
|(long string) (false) String#slice and strict comparison|905,654,791|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:46:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":241817201.94231617,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":907157588.459929,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":148746337.50918955,"samples":7},{"name":"(long string) (true) String#slice and strict comparison","opsSec":904148456.7473325,"samples":6},{"name":"(short string) (false) String#startsWith","opsSec":485509270.36906284,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":906785181.3451872,"samples":7},{"name":"(long string) (false) String#startsWith","opsSec":363965874.1781214,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":905654791.3415436,"samples":7}]}-->
