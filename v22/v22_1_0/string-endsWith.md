## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|128,463,695|83|
|(short string) (true) String#slice and strict comparison|145,742,118|80|
|(long string) (true) String#endsWith|91,574,909|89|
|(long string) (true) String#slice and strict comparison|147,343,700|83|
|(short string) (false) String#endsWith|141,073,778|84|
|(short string) (false) String#slice and strict comparison|149,331,182|86|
|(long string) (false) String#endsWith|141,674,814|84|
|(long string) (false) String#slice and strict comparison|148,017,269|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:31:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":128463694.96222468,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":145742117.63075015,"samples":4},{"name":"(long string) (true) String#endsWith","opsSec":91574908.51951411,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":147343699.76467088,"samples":5},{"name":"(short string) (false) String#endsWith","opsSec":141073778.168106,"samples":5},{"name":"(short string) (false) String#slice and strict comparison","opsSec":149331181.91171136,"samples":5},{"name":"(long string) (false) String#endsWith","opsSec":141674814.25705007,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":148017269.01852846,"samples":5}]}-->
