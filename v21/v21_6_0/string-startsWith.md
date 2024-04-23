## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|276,121,362|97|
|(short string) (true) String#slice and String#indexOf|818,949,760|100|
|(short string) (true) String#slice and strict comparison|819,507,270|98|
|(long string) (true) String#startsWith|175,297,598|98|
|(long string) (true) String#slice and strict comparison|820,869,696|97|
|(short string) (false) String#startsWith|781,608,380|96|
|(short string) (false) String#slice and strict comparison|819,637,546|92|
|(long string) (false) String#startsWith|781,181,803|98|
|(long string) (false) String#slice and strict comparison|820,367,306|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:54:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":276121362.1112227,"samples":6},{"name":"(short string) (true) String#slice and String#indexOf","opsSec":818949759.5455439,"samples":7},{"name":"(short string) (true) String#slice and strict comparison","opsSec":819507270.174789,"samples":7},{"name":"(long string) (true) String#startsWith","opsSec":175297598.30417794,"samples":7},{"name":"(long string) (true) String#slice and strict comparison","opsSec":820869695.7792708,"samples":8},{"name":"(short string) (false) String#startsWith","opsSec":781608379.9578999,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":819637545.5931863,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":781181802.934227,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":820367306.1432424,"samples":6}]}-->
