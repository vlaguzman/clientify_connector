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

var fixedSchema = {
  companies: [
    {
      name: 'url',
      label: 'Url',
      dataType: 'STRING',
      semantics: {
        conceptType: 'DIMENSION'
      }
    },
    {
      name: 'id',
      label: 'Company ID',
      dataType: 'NUMBER',
      semantics: {
        conceptType: 'DIMENSION'
      }
    },
    {
      name: 'name',
      label: 'Company Name',
      dataType: 'STRING',
      semantics: {
        conceptType: 'DIMENSION'
      }
    },
    {
      name: 'company_sector',
      label: 'Company Sector',
      dataType: 'STRING',
      semantics: {
        conceptType: 'DIMENSION'
      }
    },
    {
      name: 'number_of_employees',
      label: 'Number of employees',
      dataType: 'NUMBER',
      semantics: {
        conceptType: 'DIMENSION'
      }
    },
    {
      name: 'owner',
      label: 'Email owner',
      dataType: 'STRING',
      semantics: {
        conceptType: 'DIMENSION'
      }
    },
    {
      name: 'picture_url',
      label: 'Picture url',
      dataType: 'STRING',
      semantics: {
        conceptType: 'DIMENSION'
      }
    },
    {
      name: 'last_viewed',
      label: 'Last viewed date',
      dataType: 'STRING',
      semantics: {
        conceptType: 'DIMENSION'
      }
    },
    {
      name: 'last_interaction',
      label: 'Last interaction date',
      dataType: 'STRING',
      semantics: {
        conceptType: 'DIMENSION'
      }
    },
    {
      name: 'created',
      label: 'Created date',
      dataType: 'STRING',
      semantics: {
        conceptType: 'DIMENSION'
      }
    },
  ]
};

function getSchema(request) {
  return {schema: fixedSchema[request.configParams.resource]};
}
