## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|340,716,466|95|
|(short string) (true) String#slice and strict comparison|951,467,818|99|
|(long string) (true) String#startsWith|222,638,830|95|
|(long string) (true) String#slice and strict comparison|950,526,095|97|
|(short string) (false) String#startsWith|978,042,399|94|
|(short string) (false) String#slice and strict comparison|950,510,299|98|
|(long string) (false) String#startsWith|972,707,198|93|
|(long string) (false) String#slice and strict comparison|951,435,484|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:48:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":340716465.82906073,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":951467818.3176146,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":222638829.9717951,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":950526095.1619779,"samples":6},{"name":"(short string) (false) String#startsWith","opsSec":978042399.3576406,"samples":8},{"name":"(short string) (false) String#slice and strict comparison","opsSec":950510298.8287363,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":972707197.567458,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":951435483.6485916,"samples":6}]}-->
