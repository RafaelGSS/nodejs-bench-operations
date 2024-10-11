## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|114,824,287|57412169|
|(short string) (true) String#slice and strict comparison|61,069,358|30535024|
|(long string) (true) String#startsWith|58,363,796|29182380|
|(long string) (true) String#slice and strict comparison|54,876,049|27439234|
|(short string) (false) String#startsWith|97,237,553|48619272|
|(short string) (false) String#slice and strict comparison|60,087,751|30043881|
|(long string) (false) String#startsWith|87,943,085|43971549|
|(long string) (false) String#slice and strict comparison|54,866,044|27454301|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:42:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":114824287.24766505,"samples":57412169},{"name":"(short string) (true) String#slice and strict comparison","opsSec":61069358.4048049,"samples":30535024},{"name":"(long string) (true) String#startsWith","opsSec":58363796.64717255,"samples":29182380},{"name":"(long string) (true) String#slice and strict comparison","opsSec":54876049.06375728,"samples":27439234},{"name":"(short string) (false) String#startsWith","opsSec":97237553.92722592,"samples":48619272},{"name":"(short string) (false) String#slice and strict comparison","opsSec":60087751.30438026,"samples":30043881},{"name":"(long string) (false) String#startsWith","opsSec":87943085.33619572,"samples":43971549},{"name":"(long string) (false) String#slice and strict comparison","opsSec":54866044.05560739,"samples":27454301}]}-->
