using WhatsNext.Resources.Contracts.Configuration;

namespace WhatsNext.Resources.Core
{
    public class ConfigurationManager : IConfigurationManager
    {
        /// <summary>
        /// Get appSettings value from host web.config
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public string GetByKey(string value)
        {
            return System.Configuration.ConfigurationManager.AppSettings[value];
        }
    }
}
