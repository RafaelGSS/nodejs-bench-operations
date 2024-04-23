## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|278,929,497|97|
|(short string) (true) String#slice and String#indexOf|816,538,928|95|
|(short string) (true) String#slice and strict comparison|821,038,526|97|
|(long string) (true) String#startsWith|174,710,409|96|
|(long string) (true) String#slice and strict comparison|821,979,247|97|
|(short string) (false) String#startsWith|781,134,470|97|
|(short string) (false) String#slice and strict comparison|817,396,443|97|
|(long string) (false) String#startsWith|784,722,188|96|
|(long string) (false) String#slice and strict comparison|820,280,225|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:54:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":278929496.68096966,"samples":6},{"name":"(short string) (true) String#slice and String#indexOf","opsSec":816538928.4016563,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":821038526.3098118,"samples":9},{"name":"(long string) (true) String#startsWith","opsSec":174710408.8258393,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":821979247.1783584,"samples":8},{"name":"(short string) (false) String#startsWith","opsSec":781134470.126482,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":817396443.1869333,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":784722188.4088882,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":820280224.810163,"samples":6}]}-->
