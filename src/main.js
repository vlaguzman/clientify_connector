// https://developers.google.com/datastudio/connector/reference#getconfig
    function getConfig() {
      var cc = DataStudioApp.createCommunityConnector();
      var config = cc.getConfig();

      config
         .newSelectSingle()
         .setId('dataSource')
         .setName('Data source')
         .setHelpText('Select the kind of data do you want to get')
         .addOption(config.newOptionBuilder().setLabel('Companies').setValue('companies'))
         .addOption(config.newOptionBuilder().setLabel('Deals').setValue('deals'));

      config
	 .newTextInput()
	 .setId('companyId')
	 .setName('Company Id')
	 .setHelpText('If you want to see the deals of a specific company, write the company id')
	 .setPlaceholder('Company id');

      return config.build();
    }
