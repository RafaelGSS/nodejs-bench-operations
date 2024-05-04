## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|310,228,834|97|
|(short string) (true) String#slice and strict comparison|909,879,196|97|
|(long string) (true) String#endsWith|195,093,385|95|
|(long string) (true) String#slice and strict comparison|907,857,743|97|
|(short string) (false) String#endsWith|869,408,128|97|
|(short string) (false) String#slice and strict comparison|909,279,294|99|
|(long string) (false) String#endsWith|867,721,922|95|
|(long string) (false) String#slice and strict comparison|909,448,280|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:29:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":310228834.07779336,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":909879195.7410587,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":195093384.76112723,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":907857743.3321143,"samples":7},{"name":"(short string) (false) String#endsWith","opsSec":869408127.7531691,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":909279294.4261656,"samples":6},{"name":"(long string) (false) String#endsWith","opsSec":867721921.6355888,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":909448280.417373,"samples":7}]}-->
