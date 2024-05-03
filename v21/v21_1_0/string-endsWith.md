## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|310,356,788|96|
|(short string) (true) String#slice and strict comparison|911,733,075|98|
|(long string) (true) String#endsWith|195,653,037|97|
|(long string) (true) String#slice and strict comparison|910,730,587|99|
|(short string) (false) String#endsWith|871,019,433|100|
|(short string) (false) String#slice and strict comparison|910,030,055|96|
|(long string) (false) String#endsWith|870,987,550|99|
|(long string) (false) String#slice and strict comparison|911,014,083|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:17:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":310356788.00436836,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":911733074.7522044,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":195653036.73379457,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":910730586.615697,"samples":6},{"name":"(short string) (false) String#endsWith","opsSec":871019433.4085354,"samples":8},{"name":"(short string) (false) String#slice and strict comparison","opsSec":910030055.0655669,"samples":6},{"name":"(long string) (false) String#endsWith","opsSec":870987550.0485011,"samples":8},{"name":"(long string) (false) String#slice and strict comparison","opsSec":911014083.4627011,"samples":7}]}-->
