## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|91,741,295|98|
|(short string) (true) String#slice and strict comparison|946,464,945|98|
|(long string) (true) String#endsWith|85,483,672|99|
|(long string) (true) String#slice and strict comparison|949,575,678|98|
|(short string) (false) String#endsWith|109,502,633|97|
|(short string) (false) String#slice and strict comparison|948,609,039|94|
|(long string) (false) String#endsWith|99,851,837|96|
|(long string) (false) String#slice and strict comparison|949,200,551|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:24:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":91741294.84526499,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":946464944.7699884,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":85483671.98302616,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":949575677.7114993,"samples":7},{"name":"(short string) (false) String#endsWith","opsSec":109502632.58243582,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":948609038.6587822,"samples":6},{"name":"(long string) (false) String#endsWith","opsSec":99851837.28841552,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":949200550.9682648,"samples":6}]}-->
