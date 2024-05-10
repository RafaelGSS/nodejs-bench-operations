## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|18,489,640|9244821|
|(short string) (true) String#slice and strict comparison|19,935,077|9967539|
|(long string) (true) String#startsWith|16,770,293|8385147|
|(long string) (true) String#slice and strict comparison|19,884,960|9942481|
|(short string) (false) String#startsWith|18,573,352|9286677|
|(short string) (false) String#slice and strict comparison|19,630,435|9815218|
|(long string) (false) String#startsWith|18,154,482|9077242|
|(long string) (false) String#slice and strict comparison|19,718,365|9859183|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:29:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":18489640.557811316,"samples":9244821},{"name":"(short string) (true) String#slice and strict comparison","opsSec":19935077.122782916,"samples":9967539},{"name":"(long string) (true) String#startsWith","opsSec":16770293.295665136,"samples":8385147},{"name":"(long string) (true) String#slice and strict comparison","opsSec":19884960.608010113,"samples":9942481},{"name":"(short string) (false) String#startsWith","opsSec":18573352.142765377,"samples":9286677},{"name":"(short string) (false) String#slice and strict comparison","opsSec":19630435.332362868,"samples":9815218},{"name":"(long string) (false) String#startsWith","opsSec":18154482.76540361,"samples":9077242},{"name":"(long string) (false) String#slice and strict comparison","opsSec":19718365.369535044,"samples":9859183}]}-->
