## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|18,528,200|9264101|
|(short string) (true) String#slice and strict comparison|20,001,531|10000766|
|(long string) (true) String#startsWith|17,726,927|8863464|
|(long string) (true) String#slice and strict comparison|20,147,550|10073776|
|(short string) (false) String#startsWith|19,392,041|9696021|
|(short string) (false) String#slice and strict comparison|19,968,667|9984334|
|(long string) (false) String#startsWith|19,118,703|9559352|
|(long string) (false) String#slice and strict comparison|20,110,409|10055205|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:50:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":18528200.628933534,"samples":9264101},{"name":"(short string) (true) String#slice and strict comparison","opsSec":20001531.680021048,"samples":10000766},{"name":"(long string) (true) String#startsWith","opsSec":17726927.078079335,"samples":8863464},{"name":"(long string) (true) String#slice and strict comparison","opsSec":20147550.99275448,"samples":10073776},{"name":"(short string) (false) String#startsWith","opsSec":19392041.14660034,"samples":9696021},{"name":"(short string) (false) String#slice and strict comparison","opsSec":19968667.92025766,"samples":9984334},{"name":"(long string) (false) String#startsWith","opsSec":19118703.0440182,"samples":9559352},{"name":"(long string) (false) String#slice and strict comparison","opsSec":20110409.19545138,"samples":10055205}]}-->
