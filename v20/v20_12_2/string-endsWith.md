## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|91,295,144|97|
|(short string) (true) String#slice and strict comparison|948,248,848|99|
|(long string) (true) String#endsWith|85,485,229|98|
|(long string) (true) String#slice and strict comparison|949,931,959|96|
|(short string) (false) String#endsWith|109,474,034|98|
|(short string) (false) String#slice and strict comparison|948,290,811|98|
|(long string) (false) String#endsWith|100,092,787|98|
|(long string) (false) String#slice and strict comparison|951,819,409|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:25:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":91295143.82707956,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":948248848.2871517,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":85485229.2627348,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":949931958.9622366,"samples":7},{"name":"(short string) (false) String#endsWith","opsSec":109474033.62399723,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":948290811.0199642,"samples":6},{"name":"(long string) (false) String#endsWith","opsSec":100092787.20532641,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":951819409.3056612,"samples":7}]}-->
