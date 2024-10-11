## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|92,636,791|46529592|
|(short string) (true) String#slice and strict comparison|47,912,546|23958605|
|(long string) (true) String#startsWith|53,203,374|26601699|
|(long string) (true) String#slice and strict comparison|45,979,155|23035563|
|(short string) (false) String#startsWith|83,678,157|41918209|
|(short string) (false) String#slice and strict comparison|43,105,363|21553190|
|(long string) (false) String#startsWith|68,142,843|34080923|
|(long string) (false) String#slice and strict comparison|45,795,408|22897716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:42:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":92636791.91067018,"samples":46529592},{"name":"(short string) (true) String#slice and strict comparison","opsSec":47912546.1927536,"samples":23958605},{"name":"(long string) (true) String#startsWith","opsSec":53203374.80332858,"samples":26601699},{"name":"(long string) (true) String#slice and strict comparison","opsSec":45979155.642176874,"samples":23035563},{"name":"(short string) (false) String#startsWith","opsSec":83678157.50071889,"samples":41918209},{"name":"(short string) (false) String#slice and strict comparison","opsSec":43105363.05827473,"samples":21553190},{"name":"(long string) (false) String#startsWith","opsSec":68142843.14161877,"samples":34080923},{"name":"(long string) (false) String#slice and strict comparison","opsSec":45795408.827523135,"samples":22897716}]}-->
